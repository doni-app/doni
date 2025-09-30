.PHONY: build test lint

build:
	@echo "Building communication-service..."
	@cargo build --release

test:
	@echo "Testing communication-service..."
	@cargo test

lint:
	@echo "Linting communication-service..."
	@cargo clippy -- -D warnings
