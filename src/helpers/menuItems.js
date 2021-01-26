let menuItem =
[
    {
        label: 'صفحه نخست',
        icon: 'pi pi-home',
        to : {name : 'Home'}
    },
    {
        label: 'User list',
        icon: 'pi pi-users',
        to : {name : 'users_page'}
    },
    {
        label: 'Material Test',
        icon: 'pi pi-sitemap',
        to : {name : 'materialPage'},
        target : '_blank',
        items : [
            {
                label: 'New 1',
                icon: 'pi pi-sitemap'
            },
            {
                separator : true
            },
            {
                label: 'New 2',
                icon: 'pi pi-sitemap'
            }
        ]
    }
]

module.exports = menuItem