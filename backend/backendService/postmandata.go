package backendservice

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"

	"github.com/gin-gonic/gin"
)

func FormQueries(c *gin.Context) {

	requestBody, readAllErr := io.ReadAll(c.Request.Body)    // storing request body in variable
	bodyReader := io.NopCloser(bytes.NewBuffer(requestBody)) // creating a reader with requestBody

	if readAllErr != nil {
		c.JSON(500, gin.H{
			"error": readAllErr.Error(),
		})
		return
	} else {
		postParams := make(map[string]interface{})
		decodeErr := json.NewDecoder(bodyReader).Decode(&postParams) // decoding the bodyReader
		if decodeErr != nil {
			c.JSON(500, gin.H{
				"error": decodeErr.Error(),
			})
			return
		}
		resp := postRequest(postParams)
		c.JSON(200, gin.H{
			"message": resp,
		})
	}
}

func LogRequest(c *gin.Context) {
	ip := c.ClientIP()
	params := map[string]string{
		"ip": ip,
	}
	resp := getRequest(params)
	c.JSON(200, gin.H{
		"message": resp,
	})

}

func getRequest(params map[string]string) string {

	baseURL := "https://script.google.com/macros/s/AKfycbziuGhA6l3uCgBLIufRfTJyYpCd8aSlZbEzPvnCkTqvZeKdwkEuy3Q0fZAAGQLhAgmM/exec" // Replace with your actual URL
	u, err := url.Parse(baseURL)
	if err != nil {
		return fmt.Sprintf("Error parsing URL:%s", err.Error())

	}

	q := u.Query()
	for k, v := range params {
		q.Set(k, v)
	}
	u.RawQuery = q.Encode()

	resp, err := http.Get(u.String())
	if err != nil {
		return fmt.Sprintf("Error making GET request: %s", err.Error())

	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Sprintf("Error reading response body: %s", err.Error())

	}

	return string(body)
}

func postRequest(body map[string]interface{}) string {
	jsonBody, err := json.Marshal(body)
	if err != nil {
		return fmt.Sprintf("Error marshalling body: %s", err.Error())
	}
	req, err := http.NewRequest("POST", "https://script.google.com/macros/s/AKfycbziuGhA6l3uCgBLIufRfTJyYpCd8aSlZbEzPvnCkTqvZeKdwkEuy3Q0fZAAGQLhAgmM/exec", bytes.NewBuffer(jsonBody))
	if err != nil {
		return fmt.Sprintf("Error creating POST request: %s", err.Error())
	}
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Sprintf("Error making POST request: %s", err.Error())
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return fmt.Sprintf("Error reading response body: %s", err.Error())
	}

	return string(respBody)
}
