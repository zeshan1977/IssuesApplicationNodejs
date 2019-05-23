#!/binbash

for x in `seq 1 1000`
do 
curl -d "pnemonic=issue{$RANDOM}&title=issueRedTitle{$RANDOM}&content=WhatwentBang{$RANDOM}" http://localhost:3000/createone
done
