```python
    import requests
    customheader={'User-Agent':'Android 7.1.1'}
    req=requests.get('http://www.httpbin.org/headers',headers=customheader)
    print("Status_Code: -->" +str(req.status_code) +"\n")
    print("Server_Headers\n***************************************")
    for head in req.headers:
    	print("\t" +head + ":" + req.headers[head])
    print("----------------x-----------------\n")
    print("Response Content\n" +req.text)
```


```python
    import requests
    req=requests.post('http://www.httpbin.org/post',data={'name':'cybeat'})
    print("Status_Code: -->" +str(req.status_code) +"\n")
    print("Server_Headers\n***************************************")
    for head in req.headers:
    	print("\t" +head + ":" + req.headers[head])
    print("----------------x-----------------\n")
    print("Response Content\n" +req.text)    
```

```python
    import requests
    payload={'url':'http://www.freshdesk.com'}
    req=requests.get('http://www.httpbin.org/redirect-to', params=payload)
    print "Status_Code: " +str(req.status_code)
```


```python
    import requests
    req=requests.head('http://www.httpbin.org/ip')
    print("Status_Code: -->" +str(req.status_code) +"\n")
    print("Server_Headers\n***************************************")
    for head in req.headers:
	    print("\t" +head + ":" + req.headers[head])
    print("----------------x-----------------\n")
    print("Response Content\n" +req.text)
```