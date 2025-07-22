from flask import Flask, request, jsonify
from flask_cors import CORS
import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)
CORS(app)

# MySQL connection
db = pymysql.connect(host="localhost", user="root", passwd="Tnp@7", db="movie_database")
cursor = db.cursor()

# GET all movies
@app.route('/api/movies', methods=['GET'])
def get_movies():
    cursor.execute("SELECT * FROM movies")
    rows = cursor.fetchall()
    movies = []
    for row in rows:
        movies.append({
            "id": row[0],
            "name": row[1],
            "casting": row[2],
            "releaseDate": str(row[3]),
            "director": row[4],
            "producer": row[5]
        })
    return jsonify(movies)


@app.route('/api/movies', methods=['POST'])
def add_movie():
    try:
        data = request.json
        print("📦 Received data:", data)  # Debug print

        cursor.execute(
            "INSERT INTO movies (name, casting, release_date, director, producer) VALUES (%s, %s, %s, %s, %s)",
            (data['name'], data['casting'], data['releaseDate'], data['director'], data['producer'])
        )
        db.commit()
        return jsonify({"message": "Movie added"}), 201
    except Exception as e:
        print("❌ Error in add_movie:", e)
        return jsonify({"error": str(e)}), 500


# Delete a movie
@app.route('/api/movies/<int:id>', methods=['DELETE'])
def delete_movie(id):
    cursor.execute("DELETE FROM movies WHERE id = %s", (id,))
    db.commit()
    return jsonify({"message": "Movie deleted"})

if __name__ == '__main__':
    app.run(debug=True)