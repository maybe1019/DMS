<template>
    <aside class="fixed z-50 lg:z-0 lg:static bg-red-100">
        <div class="h-full pointer-events-none">
            <!---->
            <div
                class="hidden lg:block top-0 left-0 pointer-events-auto min-h-fill-available h-screen sticky top-header w-60"
            >
                <div class="w-auto h-full">
                    <nav
                        class="flex flex-col justify-start max-w-sm text-sm font-medium lg:h-[reset] h-[calc(100%-4.5rem)] d-scrollbar py-4 px-4 sm:px-6 lg:pr-0 lg:pt-8"
                    >
                        <ul>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                            <li>Content</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
export default {
    name: 'AppSideBar',
}
</script>
