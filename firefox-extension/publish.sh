cd src
web-ext build --overwrite-dest

source ../credentials
web-ext sign --api-key=$JWT_issuer --api-secret=$JWT_secret

cd ..
cp src/web-ext-artifacts/*.xpi dist
