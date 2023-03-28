import os
import pandas as pd
from builtins import print
from flask import Flask, jsonify, request, send_file, Response, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/files', methods=['GET'])
def get_files():
    print(' API Invoked')

    folder_path = request.args.get('folder_path')
    page_number = int(request.args.get('page_number', 1))
    page_size = int(request.args.get('page_size', 1))

    print(page_number)

    start_index = (page_number - 1) * page_size
    end_index = start_index + page_size

    all_files = os.listdir(folder_path)
    print(all_files)
    files_on_page = all_files[start_index:end_index]
    print(files_on_page)

    response = {
        'page_number': page_number,
        'page_size': page_size,
        'total_files': len(all_files),
        'files': files_on_page
    }
    print(jsonify(response))
    return jsonify(response)


@app.route('/downloads')
def download_file():
    folder_path = request.args.get('folderPath')
    file_name = request.args.get('fileName')

    print(folder_path)
    print(file_name)
    return send_from_directory(folder_path, file_name)


@app.route('/patient_data')
def get_patient_data():

    folder_path = ""
    file_name = "non_image_params.csv"
    patient_id = request.args.get('patient_id')

    file_path = f"{folder_path}/{file_name}"
    df = pd.read_csv(file_path)

    patient_data = df[df['PatientID'] == patient_id]
    patient_data_str = ""
    for _, row in patient_data.iterrows():
        patient_data_str += f"PatientID: {row['PatientID']}\n"
        patient_data_str += f"CenterID: {row['CenterID']}\n"
        patient_data_str += f"Gender: {row['Gender']}\n"
        patient_data_str += f"Age: {row['Age']}\n"
        patient_data_str += f"Tobacco: {row['Tobacco']}\n"
        patient_data_str += f"Alcohol: {row['Alcohol']}\n"
        patient_data_str += f"Performance_status: {row['Performance_status']}\n"
        #hpv_status = "Positive" if row['HPV status'] == 1 else "Negative"
        #patient_data_str += f"HPV status: {hpv_status}\n"
        #patient_data_str += f"HPV status: {row['HPV status']}\n"
        patient_data_str += f"Surgery: {row['Surgery']}\n"
        patient_data_str += f"Chemotherapy: {row['Chemotherapy']}\n"

    return patient_data_str

    return patient_data_str


if __name__ == '__main__':
    app.run(debug=True)
