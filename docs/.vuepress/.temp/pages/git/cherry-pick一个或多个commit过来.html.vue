<template><p>单个commit只需要git cherry-pick commitid</p>
<p>多个commit 只需要git cherry-pick commitid1..commitid100</p>
<p>注意，不包含第一个commitid ， 即  git cherry-pick (commitid1..commitid100]</p>
<blockquote>
<p>不光是摘取比的分支的commit，本地分枝 摘取远程本分枝的commit也是可以的</p>
</blockquote>
</template>
