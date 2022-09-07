!#/bin/bash
cd update; wrangler publish; cd ..;
cd delete; wrangler publish; cd ..;
cd create; wrangler publish; cd ..;
cd get; wrangler publish; cd ..;
cd list; wrangler publish; cd ..; 
cd gateway; wrangler publish; cd ..; 