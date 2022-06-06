# EMAIL=b@example.com PASSWORD=b sh curl-scripts/auth/sign-up.sh

# if the PASSWORD_CONFIRMATION was different
# EMAIL=b@example.com PASSWORD=b PASSWORD_CONFIRMATION=b sh curl-scripts/auth/sign-up.sh


# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
      "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
        "password_confirmation": "'"${PASSWORD}"'"
      }
  }'

echo
