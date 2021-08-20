import sys
from PyQt6.QtWidgets import QApplication, QLineEdit, QPushButton, QWidget
import webbrowser


class SearchInGoogleClient(QWidget):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Search In Google")
        self.setGeometry(200, 500, 400, 400)
        self.btn = QLineEdit("Search In Google", self)
        self.btn.setText("")
        self.btn.move(125, 250)
        self.search = QPushButton(self)
        self.search.setText("Search")
        self.search.move(140, 300)
        self.search.clicked.connect(self.searchmiddle)

    def searchmiddle(self):
        text = self.btn.text()
        search(text)


def search(text: str):
    webbrowser.open(f"https://www.google.com/search?q={text.replace(' ', '+')}")


app = QApplication(sys.argv)
myWindow = SearchInGoogleClient()
myWindow.show()
app.exec()
