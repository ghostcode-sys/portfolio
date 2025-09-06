package router

import (
	frontendserve "backfolio/FrontendServe"
	backendservice "backfolio/backendService"

	"github.com/gin-gonic/gin"
)

func Routers(r *gin.Engine) {
	r.GET("/logIp", backendservice.LogRequest)
	r.POST("/postQuery", backendservice.FormQueries)
	r.NoRoute(frontendserve.ServePortFolio)
}
