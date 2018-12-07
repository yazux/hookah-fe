<template>
    <div id="content">
      <v-ons-card>
        <div class="title center">Войдите в свой аккунт</div>
        <form v-on:submit="login" class="content center">
          <y-input label="Ваш логин"  v-model="form.login"></y-input>
          <y-input label="Ваш пароль" v-model="form.password" type="password"></y-input>

          <div class="flex">
            <v-ons-button v-on:click="signup" style="margin: 0 6px" modifier="material--flat">Регистрация</v-ons-button>
            <v-ons-button v-on:click="login" modifier="material">Войти</v-ons-button>
          </div>
        </form>
      </v-ons-card>
    </div>
</template>
<script src="./index.js"></script>
<style>
</style>
