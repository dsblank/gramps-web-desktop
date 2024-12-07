import requests
import shutil
import tarfile
import os

LATEST_URL = "https://github.com/gramps-project/gramps-web/releases/latest"

def download_file(url, filename):
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192): 
                f.write(chunk)

def untargz(tar_gz_filename, version, target_dir):
    prefix = "grampsjs-%s/" % version
    with tarfile.open(tar_gz_filename, "r:gz") as tar:
        for member in tar.getmembers():
            member.name = member.name.replace(prefix, "")
            tar.extract(member, target_dir)

if os.path.isdir("gramps-web-desktop/frontend"):  
    shutil.rmtree("gramps-web-desktop/frontend") 
                
r = requests.get(LATEST_URL)
version = r.url.rsplit("/", 1)[1]
download_url = f"https://github.com/gramps-project/gramps-web/releases/download/{version}/grampsjs-{version}.tar.gz"

download_file(download_url, "gramps-web-frontend.tar.gz")
untargz("gramps-web-frontend.tar.gz", version, "gramps-web-desktop/frontend")
