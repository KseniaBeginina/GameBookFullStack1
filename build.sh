#!/bin/bash

# Клонирование репозитория
git clone https://github.com/KseniaBeginina/GameBookFullStack1.git

# Переход в каталог с проектом
cd GameBookFullStack

# Сборка образов Docker
docker-compose build

# Запуск контейнеров
docker-compose up
