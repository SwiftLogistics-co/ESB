#ARG BASE_IMAGE
FROM wso2/wso2mi:4.4.0
#FROM ${BASE_IMAGE}
COPY CompositeApps/*.car ${WSO2_SERVER_HOME}/repository/deployment/server/carbonapps/
COPY resources/wso2carbon.jks ${WSO2_SERVER_HOME}/repository/resources/security/wso2carbon.jks
COPY resources/client-truststore.jks ${WSO2_SERVER_HOME}/repository/resources/security/client-truststore.jks
#COPY libs/*.jar ${WSO2_SERVER_HOME}/lib/

EXPOSE 8290 8253 9164

# 

# Start the server
CMD ["/home/wso2carbon/wso2mi-4.4.0/bin/micro-integrator.sh"]