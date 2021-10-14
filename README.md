## Public URL

marceastman.com

#### note

www.marceastman.com redirects to marceastman.com

## Getting Started

```
git clone https://github.com/slothdude/react-bootstrap-redux.git
cd react-bootstrap-redux
npm install
npm start
```

## To fix the 3x3 invertible matrix error
wrap line 68213 `this.invert3x3().transpose3x3(this.mat3);` in the p5.js file in node_modules
in a null check like so:

```
if(this.invert3x3()){
    this.invert3x3().transpose3x3(this.mat3);
}
```
(I tried to submit this as a pull request and the authors shut it down because they did not see it as a problem because they havent tried 
making the processing.js library work with react router before)


# AWS tutorial followed from here:
https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html


Basically its statically hosted in an aws S3 bucket, and I manually build it using `npm build` whenever I want to upload my changes, and 
copy the contents of the build folder into aws because its not that hard to copy into the one bucket. If this was a more serious project I would consider trying to setup an automated
deployment pipeline but I've heard that that can be pretty annoying with git -> aws codedeploy integrations 

### SSL certificate tutorial 
https://towardsdatascience.com/static-hosting-with-ssl-on-s3-a4b66fb7cd00

don't forget to set the default root object: https://serverfault.com/questions/581268/amazon-cloudfront-with-s3-access-denied

