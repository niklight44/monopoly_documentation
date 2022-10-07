module.exports = {
    title: 'Monopoly',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about'},
            {text: 'Contact', link: '/contact'}
        ],
        sidebar: [
            {
                text: 'Monopoly',
                items: [
                    {text: 'Web и Android приложения', link: '/web_android'},
                    {text: 'Адаптер HTTP', link: '/adapter_http'},
                    {text: 'Бизнес Логика', link: '/business_logic'},
                    {text: 'Бот Фабрика', link: '/bot'},
                    {text: 'Адаптер Database', link: '/adapter_database'},
                    {text: 'Admins', link: '/admins'},
                    {text: 'Логировщик', link: '/logs'}
                ]
            }
        ]
    }
}