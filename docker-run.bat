C:\Windows\System32\cmd.exe /k "docker build -t turbolinks ."

C:\Windows\System32\cmd.exe /k "docker rm -f turbolinks-app"

C:\Windows\System32\cmd.exe /k "docker run -dit --name turbolinks-app -p 8080:80 turbolinks"
