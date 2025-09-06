package backendservice

import "github.com/gin-gonic/gin"

func Postrequest(c *gin.Context) {
	
	
	c.JSON(200, gin.H{
		"message": "success",
	})
}
