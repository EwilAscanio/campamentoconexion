
Code para subir proyecto a Vercel
git add .  
git commit -m "Cambio en metodos de pagos" 
git push 
vercel --prod --force --build-env NEXT_PRIVATE_SKIP_SNAKE_CASE_CHECK=true