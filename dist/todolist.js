"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Todo = require("./todo.js");
var TodoList = /*#__PURE__*/function () {
  function TodoList(title) {
    _classCallCheck(this, TodoList);
    this.title = title;
    this.todos = [];
  }
  return _createClass(TodoList, [{
    key: "add",
    value: function add(todo) {
      if (todo instanceof Todo) {
        this.todos.push(todo);
      } else {
        throw new TypeError("can only add Todo objects");
      }
    }
  }, {
    key: "size",
    value: function size() {
      return this.todos.length;
    }
  }, {
    key: "first",
    value: function first() {
      return this.todos[0];
    }
  }, {
    key: "last",
    value: function last() {
      return this.todos[this.size() - 1];
    }
  }, {
    key: "_validateIndex",
    value: function _validateIndex(index) {
      if (!(index in this.todos)) {
        throw new ReferenceError("invalid index: ".concat(index));
      }
    }
  }, {
    key: "itemAt",
    value: function itemAt(index) {
      this._validateIndex(index);
      return this.todos[index];
    }
  }, {
    key: "markDoneAt",
    value: function markDoneAt(index) {
      this.itemAt(index).markDone();
    }
  }, {
    key: "markUndoneAt",
    value: function markUndoneAt(index) {
      this.itemAt(index).markUndone();
    }
  }, {
    key: "isDone",
    value: function isDone() {
      return this.todos.every(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      return this.todos.shift();
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.todos.pop();
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      this._validateIndex(index);
      return this.todos.splice(index, 1)[0];
    }
  }, {
    key: "toString",
    value: function toString() {
      var title = "-- ".concat(this.title, " --");
      var list = this.todos.map(function (todo) {
        return todo.toString();
      }).join("\n");
      return "".concat(title, "\n").concat(list);
    }
  }, {
    key: "forEach",
    value: function forEach(func) {
      this.todos.forEach(func);
    }
  }, {
    key: "filter",
    value: function filter(func) {
      var newList = new TodoList(this.title);
      this.forEach(function (todo) {
        if (func(todo)) {
          newList.add(todo);
        }
      });
      return newList;
    }
  }, {
    key: "findByTitle",
    value: function findByTitle(title) {
      var wantedTodo;
      this.forEach(function (todo) {
        if (todo.getTitle() === title) {
          wantedTodo = todo;
        }
      });
      return wantedTodo;
    }
  }, {
    key: "allDone",
    value: function allDone() {
      return this.filter(function (todo) {
        return todo.isDone();
      });
    }
  }, {
    key: "allNotDone",
    value: function allNotDone() {
      return this.filter(function (todo) {
        return !todo.isDone();
      });
    }
  }, {
    key: "markDone",
    value: function markDone(title) {
      var curr = this.findByTitle(title);
      if (curr) {
        curr.markDone();
      }
    }
  }, {
    key: "markAllDone",
    value: function markAllDone() {
      this.forEach(function (todo) {
        return todo.markDone();
      });
    }
  }, {
    key: "markAllUndone",
    value: function markAllUndone() {
      this.forEach(function (todo) {
        return todo.markUndone();
      });
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return Array.from(this.todos);
    }
  }]);
}();
module.exports = TodoList;