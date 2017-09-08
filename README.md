Team Node Skeleton - JavaScript
-
This skeleton is based on node.js + express.js

Configure the Gitlab deployment pipeline by entering the
- heroku app name
- heroku api key 

in the deploy stage in `.gitlab-ci.yml`
```
dpl --provider=heroku --app=<heroku app name> --api-key=<heroku api key>
``` 
