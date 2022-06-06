# VARIABLE=VALUE sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data `"game": {
        "cells": {
          "index": ${ind},
          "value": ${value}
        },
        over: false
      }`

echo
