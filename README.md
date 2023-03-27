# Ema-John

### Fake data link: 
use this link to load data: 
[https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json](https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json)


#Sometimes, Git can't make your change to a remote repository without losing commits. When this happens, your push is refused.
$ git push origin main
> To https://github.com/USERNAME/REPOSITORY.git
>  ! [rejected]        main -> main (non-fast-forward)
> error: failed to push some refs to 'https://github.com/USERNAME/REPOSITORY.git'
> To prevent you from losing history, non-fast-forward updates were rejected
> Merge the remote changes (e.g. 'git pull') before pushing again.  See the
> 'Note about fast-forwards' section of 'git push --help' for details.

Answer: do this
$ git fetch origin
# Fetches updates made to an online repository
$ git merge origin YOUR_BRANCH_NAME
# Merges updates made online with your local work
$ git pull origin YOUR_BRANCH_NAME
# Grabs online updates and merges them with your local work
