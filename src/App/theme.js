export const lightTheme = {
    colors: {
        header: "hsl(0, 0%, 96%)",
        subHeader: "hsl(180, 100%, 25%)",
        text: "hsl(0, 0%, 0%)",
        button: "hsl(180, 100%, 25%)",
        formButtonText: "hsl(0, 0%, 100%)",
        themeToggler: "hsl(0, 0%, 96%)",
        input: "hsl(0, 0%, 100%)",
        placeholder: "hsl(230, 24%, 56%)",
        disabled: "hsl(0, 0%, 67%)",
        border: "hsl(270, 6%, 93%)",
        mainBackground: "linear-gradient(0deg, rgba(246,246,246,1) 40%, rgba(0,128,128,1) 100%)",
        sectionBackground: "hsl(0, 0%, 100%)",
        navigationBackground: "transparent",

        links: {
            navigation: "hsl(0, 0%, 100%)",
            task: "hsl(180, 100%, 25%)",
        },
    },

    breakpoints: {
        mobileMax: 767,
    },
};

export const darkTheme = {
    ...lightTheme,

    colors: {
        header: "hsl(0, 0%, 90%)",
        subHeader: "hsl(0, 0%, 90%)",
        text: "hsl(0, 0%, 90%)",
        button: "hsl(260, 100%, 70%)",
        formButtonText: "hsl(0, 0%, 0%)",
        themeToggler: "hsl(260, 100%, 70%)",
        input: "hsl(216, 28%, 7%)",
        placeholder: "hsl(0, 0%, 67%)",
        disabled: "hsl(0, 0%, 67%)",
        border: "hsl(0, 0%, 7%)",
        mainBackground: "hsl(216, 28%, 7%)",
        sectionBackground: "hsl(215, 21%, 11%)",
        navigationBackground: "hsl(215, 21%, 11%)",

        links: {
            navigation: "hsl(0, 0%, 90%)",
            task: "hsl(0, 0%, 90%)",
        },
    },
};