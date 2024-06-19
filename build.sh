cp -r -f Assets dist/Assets
npx github-readme-to-html -i README.md -o index.html -t sbk_portfolio
cd dist
serve .
