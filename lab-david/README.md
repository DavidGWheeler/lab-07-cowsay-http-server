# Cowsay Http Server
====
This project is meant to show the use of an HTTP GET or POST request and get a response.  The response body should be used in cowsay.

for example, using httpie, ```http :3030/``` will return:

```
 _____________
< hello world >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```
## GET Requests: http localhost:3000/ //will respond with "hello world" with no cowsay http localhost:3000/cowsay text=='[insert text]' : will respond with cowsay //will

## POST Requests:

Ensure you have a data.json file.

Ensure your data.json file has an object with the property of 'text' that is set to string.

Run the following command
### Attributions
- Kayla Alvarado helped me resolve some server issues
- Steven Johnson helped me with some testing ideas
- Took a peek at a github I found via Google for help with understanding
