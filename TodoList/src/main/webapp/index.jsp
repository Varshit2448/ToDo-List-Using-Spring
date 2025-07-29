<!-- File: index.jsp -->
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>ToDo List</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background: #f5f7fa;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: 50px auto;
            background: white;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 10px;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 15px;
            text-align: left;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .btn {
            padding: 8px 16px;
            border: none;
            color: white;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }
        .btn-add { background-color: #2ecc71; }
        .btn-update { background-color: #f1c40f; }
        .btn-delete { background-color: #e74c3c; }
        .btn:hover { opacity: 0.9; }
        .actions {
            display: flex;
            gap: 10px;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>My ToDo List</h1>
    <a class="btn btn-add" href="add.jsp">Add Task</a>
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach var="task" items="${tasks}">
            <tr>
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.status ? 'Completed' : 'Pending'}</td>
                <td class="actions">
                    <a class="btn btn-update" href="update.jsp?id=${task.id}&name=${task.name}&status=${task.status}">Update</a>
                    <a class="btn btn-delete" href="delete.jsp?id=${task.id}">Delete</a>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</div>
</body>
</html>
