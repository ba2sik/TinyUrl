### 1. What is a URL shortening system?  
A URL shortening system is a service that takes a long URL, and generates a short URL that redirects to the original URL.

### 2. What's the main value? Who needs such a system and why?
The main value is making the links more manageable and easier to share.  
It's useful on social media when you have a character limit, or just making it more readable / easier to remember.

### 3. Describe The main mechanism of work and system components.
The main mechanism is to have the user enter a URL in the client, send a web request to the server, which will generate a short URL, save the mapping in a MongoDB, and returns the user the short URL.  
Then, when the user accesses the short URL, the server will look up the mapping in the MongoDB, and redirect the user to the original URL.

### 4. What do you think are the main challenges in implementing and running the system
I think the main challenges are:
* Making sure there are no collisions in the short URL generation.
* Preventing abuse, like phishing.

### 5. Try to suggest some ideas for advanced features.
* Custom short URLs.
* URL expiration.
* QR Code generation.
