# Cowsay Http Server
====
This project is meant to show the use of an HTTP GET or POST request and get a response.  The response body should be used in cowsay.

for example, (using httpie), ```http :3030/``` will return:

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
### GET Requests:
(using httpie)

 ```:3000/cowsay?text='[insert text]'```  will respond with cowsay

### POST Requests:
(using httpie)
 ```:3000/``` //will respond with "hello world" in cowsay


### Attributions
- Kayla Alvarado helped me resolve some server issues and improvements to expect strings.
- Steven Johnson helped me with some testing ideas
