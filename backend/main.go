package main

import (
	router "backfolio/Router"
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		fmt.Println("Requested:", c.Request.URL.Path)
		c.Next()
	})

	// Serve static files first
	r.Static("/assets", "/var/www/dist/assets")

	// Fallback for SPA routes
	router.Routers(r)

	serv := &http.Server{
		Addr:    ":5080",
		Handler: r,
	}

	go func() {
		if err := serv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to listen: %s\n", err)
		}
	}()

	// Graceful shutdown
	exit := make(chan os.Signal, 1)
	signal.Notify(exit, syscall.SIGINT, syscall.SIGTERM)
	<-exit

	fmt.Println("Gracefully exiting...")
	if err := serv.Shutdown(context.Background()); err != nil {
		log.Fatal("Server Shutdown error:", err)
	}
}
