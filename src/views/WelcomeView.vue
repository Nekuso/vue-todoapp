<script setup>
    import { RouterView, RouterLink } from 'vue-router';
</script>


<template>
    <div class="container">
        <div class="content">
            <h2>Kaihzan-Nixxo Jamilla</h2>
            <!-- button the links to /home -->
            <RouterLink to="/home" class="button">
                Go to app
            </RouterLink>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100vh;
        background: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 1s ease-in-out;
        
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .content {
        width: 100%;
        max-width: 500px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .content h2 {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .content .button {
        width: 100%;
        max-width: 200px;
        height: 50px;
        background: #000;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    .content .button:hover {
        background: #333;
    }

    .content .button:active {
        background: #555;
    }

    .content .button:focus {
        outline: none;
    }
    .content .button span {
        font-size: 20px;
        font-weight: 500;
    }
</style>