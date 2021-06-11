from flask import Flask, request, jsonify, render_template, url_for, session, redirect
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/AprendeJugando'
mongo=PyMongo(app)


CORS(app)

db = mongo.db.users



@app.route('/register', methods=['POST']) 
def createUser():
    if request.method == 'POST':
        user = mongo.db.users
        existing_user = user.find_one({'email' : request.json['email']})

        if existing_user is None:
            id = db.insert({
                'name': request.json['name'],
                'email': request.json['email'],
                'image': request.json['image'],
                'ahorcado': request.json['ahorcado'],
                'triqui': request.json['triqui'],
                'stop': request.json['stop'],
                'password': request.json['password']    
                })    
    
        return jsonify(str(ObjectId(id)))

    
    

@app.route('/users', methods=['GET'])
def getUsers():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'name': doc['name'],
            'email': doc['email'],
            'image': doc['image'],
            'ahorcado': doc['ahorcado'],
            'triqui': doc['triqui'],
            'stop': doc['stop'],
            'password': doc['password']
        })
    return jsonify(users)
    

@app.route('/user/<id>', methods=['GET'])
def getUser(id):
    user = db.find_one({'_id': ObjectId(id)})
    print (user)
    return  jsonify({
        '_id': str(ObjectId(user['_id'])),
        'name': user['name'],
        'email': user['email'],
        'image': user['image'],
        'ahorcado': user['ahorcado'],
        'triqui': user['triqui'],
        'stop': user['stop'],
        'password': user['password']

    })

@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id' : ObjectId(id)})
    return  jsonify({'msg':'User delete'})

@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    db.update_one({'_id': ObjectId(id)}, {'$set': {
        'name': request.json['name'],
        'email': request.json['email'],
        'image': request.json['image'],
        'ahorcado': request.json['ahorcado'],
        'triqui': request.json['triqui'],
        'stop': request.json['stop'],
        'password': request.json['password']
    }})

    return jsonify({'msg': 'User Updated'})
    




if __name__ == "__main__":
    app.run(debug=True)