# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --header "Content-Type: application/json" \
  --request DELETE \
  --data
echo
