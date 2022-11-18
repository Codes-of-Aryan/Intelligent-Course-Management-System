import urllib
import numpy as np
import cv2
import pickle
from datetime import datetime
import os
import sys 


def recognize():
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    recognizer.read(os.path.dirname(os.getcwd()) + "/FaceRecognition/train.yml")

    labels = {"person_name": 1}
    with open(os.path.dirname(os.getcwd()) + "/FaceRecognition/labels.pickle", "rb") as f:
        labels = pickle.load(f)
        labels = {v: k for k, v in labels.items()}
    print(labels)

    # Define camera and detect face
    face_cascade = cv2.CascadeClassifier(os.path.join(cv2.data.haarcascades, 'haarcascade_frontalface_default.xml'))
    cap = cv2.VideoCapture(0)

    start_time = datetime.now() 

    # 3 Open the camera and start face recognition
    # Close in 10 seconds, regardless of a match
    
    name = 'UNKNOWN' 
    while True:
        ret, frame = cap.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.5, minNeighbors=5)

        for (x, y, w, h) in faces:
            roi_gray = gray[y:y + h, x:x + w]
            roi_color = frame[y:y + h, x:x + w]
            # predict the id and confidence for faces
            id_, conf = recognizer.predict(roi_gray)

            # If the face is recognized
            if conf >= 60:
                font = cv2.QT_FONT_NORMAL
                id = 0
                id += 1
                name = labels[id_]
                color = (255, 0, 0)
                stroke = 2
                cv2.putText(frame, name, (x, y), font, 1, color, stroke, cv2.LINE_AA)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), (2))

            # If the face is unrecognized
            else: 
                color = (255, 0, 0)
                stroke = 2
                font = cv2.QT_FONT_NORMAL
                cv2.putText(frame, "UNKNOWN", (x, y), font, 1, color, stroke, cv2.LINE_AA)
                cv2.rectangle(frame, (x, y), (x + w, y + h), (255, 0, 0), (2))

        cv2.imshow('Attendance System', frame)
        time_delta = datetime.now() - start_time
        k = cv2.waitKey(20) & 0xff
        
        if k == ord('q'):
            break
        elif time_delta.total_seconds() >= 10: 
            break
  
    cap.release()
    cv2.destroyAllWindows()
    return name