<template>
    <div class="col-12 col-md-6 col-lg-4 my-3">
        <div class="to-do">
            <span class="to-do-no">
                <slot name="number"></slot>
            </span>
            <div class="to-do-content">
                <p>
                    <slot></slot>
                </p>
            </div>

            <div class="to-do-check">
                <input type="checkbox">
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .to-do {
        border: 1px solid #ccc;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        align-items: center;
        background-color: yellow;
        padding: 5px 10px;
        position: relative;
    }

    .to-do p {
        margin: 0 !important;
    }

    .to-do-check {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
    }

    .to-do-check>input {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .to-do-no{
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        top: -15px;
        right: -15px;
        background-color: green;
        color: white;
        text-align: center;
        line-height: 30px;
    }
</style>