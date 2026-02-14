.PHONY: help install dev build start clean lint lint-fix format typecheck check test test-watch test-coverage setup setup-windows docker docker-up docker-down

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m # No Color

help: ## Show this help message
	@echo "$(BLUE)📚 Available Commands:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(YELLOW)Examples:$(NC)"
	@echo "  make install    # Install dependencies"
	@echo "  make dev        # Start development server"
	@echo "  make build      # Build for production"
	@echo "  make check      # Run all checks"
	@echo ""

install: ## Install dependencies
	@echo "$(BLUE)📥 Installing dependencies...$(NC)"
	npm install
	@echo "$(GREEN)✅ Done!$(NC)"

dev: ## Start development server (localhost:3000)
	@echo "$(BLUE)🚀 Starting development server...$(NC)"
	npm run dev

build: ## Build for production
	@echo "$(BLUE)🔨 Building for production...$(NC)"
	npm run build
	@echo "$(GREEN)✅ Build complete!$(NC)"

start: build ## Build and start production server
	@echo "$(BLUE)🚀 Starting production server...$(NC)"
	npm start

lint: ## Check code quality with ESLint
	@echo "$(BLUE)🔍 Running ESLint...$(NC)"
	npm run lint

lint-fix: ## Fix linting issues automatically
	@echo "$(BLUE)🔧 Fixing linting issues...$(NC)"
	npm run lint:fix
	@echo "$(GREEN)✅ Issues fixed!$(NC)"

format: ## Format code with Prettier
	@echo "$(BLUE)✨ Formatting code...$(NC)"
	npm run format
	@echo "$(GREEN)✅ Code formatted!$(NC)"

format-check: ## Check code formatting without changes
	@echo "$(BLUE)🔍 Checking code formatting...$(NC)"
	npm run format:check

typecheck: ## Check TypeScript types
	@echo "$(BLUE)📝 Type checking...$(NC)"
	npm run typecheck
	@echo "$(GREEN)✅ Type check complete!$(NC)"

check: ## Run all checks (lint + typecheck + format)
	@echo "$(BLUE)✅ Running full code quality check...$(NC)"
	npm run check
	@echo "$(GREEN)✅ All checks passed!$(NC)"

test: ## Run tests with Vitest
	@echo "$(BLUE)🧪 Running tests...$(NC)"
	npx vitest run

test-watch: ## Run tests in watch mode
	@echo "$(BLUE)🧪 Running tests in watch mode...$(NC)"
	npx vitest

test-coverage: ## Run tests with coverage report
	@echo "$(BLUE)🧪 Running tests with coverage...$(NC)"
	npx vitest run --coverage

clean: ## Clean build and cache files
	@echo "$(BLUE)🗑️  Cleaning build files...$(NC)"
	rm -rf .next
	rm -rf build
	rm -rf dist
	@echo "$(GREEN)✅ Cleaned!$(NC)"

setup: ## Run setup script (macOS/Linux)
	@echo "$(BLUE)🚀 Running setup script...$(NC)"
	./setup.sh

setup-windows: ## Run setup script (Windows)
	@echo "$(BLUE)🚀 Running setup script...$(NC)"
	./setup.bat

install-dev: install format lint-fix ## Install dependencies and fix issues
	@echo "$(GREEN)✅ Development setup complete!$(NC)"

serve: dev ## Alias for 'dev'

update: ## Update npm packages
	@echo "$(BLUE)📦 Updating packages...$(NC)"
	npm update
	@echo "$(GREEN)✅ Packages updated!$(NC)"

audit: ## Check security vulnerabilities
	@echo "$(BLUE)🔒 Checking vulnerabilities...$(NC)"
	npm audit

audit-fix: ## Fix security vulnerabilities
	@echo "$(BLUE)🔒 Fixing vulnerabilities...$(NC)"
	npm audit fix
	@echo "$(GREEN)✅ Vulnerabilities fixed!$(NC)"

reset: clean install ## Clean and reinstall everything
	@echo "$(GREEN)✅ Full reset complete!$(NC)"

docker: ## Build Docker image
	@echo "$(BLUE)🐳 Building Docker image...$(NC)"
	docker build -t next-template .
	@echo "$(GREEN)✅ Docker image built!$(NC)"

docker-up: ## Start with Docker Compose
	@echo "$(BLUE)🐳 Starting with Docker Compose...$(NC)"
	docker compose up -d
	@echo "$(GREEN)✅ Running at http://localhost:3000$(NC)"

docker-down: ## Stop Docker Compose
	@echo "$(BLUE)🐳 Stopping containers...$(NC)"
	docker compose down
	@echo "$(GREEN)✅ Stopped!$(NC)"

.DEFAULT_GOAL := help
