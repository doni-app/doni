.PHONY: build test lint

build:
	@echo "Building inventory-service..."
	@go build -o app ./cmd

test:
	@echo "Testing inventory-service..."
	@go test ./...

lint:
	@echo "Linting inventory-service..."
	@golangci-lint run
