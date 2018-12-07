<template>
  <div id="content">
    <v-ons-card>
      <div class="title center">Создайте новый аккунт</div>
      <form v-on:submit="signup" class="content center">
        <y-input label="Ваш email"  v-model="form.email"></y-input>
        <y-input label="Ваш пароль" v-model="form.password" type="password"></y-input>
        <y-input label="Пароль ещё раз" v-model="form.password_confirm" type="password"></y-input>

        <div class="flex">
          <v-ons-button v-on:click="login" style="margin: 0 6px" modifier="material--flat">Авторизация</v-ons-button>
          <v-ons-button v-on:click="signup" modifier="material">Отправить</v-ons-button>
        </div>

      </form>
    </v-ons-card>
  </div>
</template>
<script src="./index.js"></script>
<style>
</style>
