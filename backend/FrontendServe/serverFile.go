package frontendserve

import (
	"fmt"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func ServePortFolio(c *gin.Context) {

	htmlPath := filepath.Join("/var/www/dist", "index.html")

	fmt.Println("filePath Exist: ", htmlPath)

	if filepath.Ext(htmlPath) != "" {
		c.File(htmlPath)
	} else {
		c.JSON(200, gin.H{
			"message": fmt.Sprintf("%s does not exist", htmlPath),
		})
	}
}
