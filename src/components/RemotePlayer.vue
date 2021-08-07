<template>
	<div class="card">
		<div class="back">
			<div class="top-corner">
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.card {
	position: relative;
	display: inline-block;
	width: 8rem;
	height: 12rem;
	margin: 0.2rem;
	transition: all 0.2s ease;
}

.card, .back{
	background-color: red;
	/*background-image: url('../../assets/card-back.svg');*/
	transform: rotateY(-180deg);
}
.card, .back {
    border: 1px solid;
    border-radius: 0.75rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    backface-visibility: hidden;
    transition: transform 0.5s;
    transform-style: preserve-3d;
}

</style>
