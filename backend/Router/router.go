package router

import (
	frontendserve "backfolio/FrontendServe"

	"github.com/gin-gonic/gin"
)

func Routers(r *gin.Engine) {
	r.NoRoute(frontendserve.ServePortFolio)
}
