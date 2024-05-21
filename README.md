# Run application 
ddev start
# Update Tailwind CSS
npx tailwindcss -i ./web/css/input.css -o ./web/css/output.css --watch
# Install Glide.js
ddev exec npm install @glidejs/glide