rsync -avz -e ssh /local/path/to/myapp root@YOUR_SERVER_IP:/root/pb
rsync -avz -e ssh --include="pb_data/*" --include="pb_hooks/*" --exclude="*" root@YOUR_SERVER_IP:/root/pb

sudo rsync -avz -e ssh --include="pb_data/*" --include="pb_hooks/*" --exclude="*" oracle-vm:/root/pb
