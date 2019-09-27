import VueSocketIOExt from 'vue-socket.io-extended';
import io from "socket.io-client"
import Vue from "vue";

import store from "../../store";

/**
 * Creates the socket connection with the server
 * @param {String} payload The token that identifies the socket connection. JWT
 */
export function createConnection (state, payload) {
  const url = `${process.env.VUE_APP_API_URL}/?token=${payload}`;
  Vue.use(VueSocketIOExt, io(url), { store: store() });
  state.socket = Vue.prototype.$socket.client;
}
/**
 * Joins a chat room in the server. Used for sending & receiving socket messages
 * @param {string} payload Room ID. In this case is the selected course ID
 */
export function joinChatRoom (state, payload) {
  state.socket.emit("joinChatRoom", payload);
}
/**
 * Leaves a chat room from the server. Used when leaving the chat component
 * @param {String} payloda Room ID. In this case is the selected booking ID
 */
export function leaveChatRoom (state, payload) {
  state.socket.emit("leaveChatRoom", payload);
}
