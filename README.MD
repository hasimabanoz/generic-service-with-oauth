generic-service-with-oauth backend project
To build project:
-Maven clean generic-service-with-oauth-frontend & generic-service-with-oauth-backend modules
-Enter generic-service-with-oauth-front/src/main and run ng build 
-Then maven install generic-service-with-oauth-front this step produce a jar under the target folder
-Enter generic-service-with-oauth-backend module 
-Make Maven Install to produce war under target of this module
-or you can start this module as spring boot project to make deployment on you local envoirement.



####Generic REST service####

#get user status. no auth required.
curl -XGET -s http://localhost:8080/generic-service/services/user/status/

#get user details. token request first
#get token
curl -s POST -vu genericservice-manager:secret http://localhost:8080/generic-service/oauth/token -H "Accept: application/json" -d "password=21232F297A57A5A743894A0E4A801FC3&username=admin&grant_type=password&scope=read%20write"
#get user detail
curl -XGET -s http://localhost:8080/generic-service/services/user/ -H "Authorization: Bearer 78aacc91-600e-414f-8c9c-5cb6b88efa45"




