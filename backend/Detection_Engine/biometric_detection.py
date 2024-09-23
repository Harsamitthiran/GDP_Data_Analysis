from transformers import DetrImageProcessor, DetrForObjectDetection
import torch
from PIL import Image
import sys
import os
import glob


# below added because of the relative import error
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

def path_finder(rel_path):
        try:
            base_path = sys._MEIPASS
        except Exception:
            base_path = os.path.abspath(".")

        return os.path.join(base_path,rel_path)
# from backend.Document_parser.extract_images import extract_images_from_pdf
# from backend.Document_parser.extract_images import extract_images_from_docx
# from backend.Document_parser.extract_images import extract_images_from_excel

# from ..Document_parser.extract_images import extract_images_from_pdf
# from ..Document_parser.extract_images import extract_images_from_docx
# from ..Document_parser.extract_images import extract_images_from_excel


# from tensorflow.python.framework.ops import disable_eager_execution
# disable_eager_execution()

class biometric_detection:
    def save_model_local():
        processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50", revision="no_timm")
        model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50", revision="no_timm")

        processor.save_pretrained('./local_model/detr_image_processor')
        model.save_pretrained('./local_model/detr_for_object_detection')


    def biometric_detect_people(self, source):
        image = Image.open(source)
        if image.mode != 'RGB':
            image = image.convert('RGB')
        # image.show()

        processor = DetrImageProcessor.from_pretrained("facebook/detr-resnet-50", revision="no_timm")
        model = DetrForObjectDetection.from_pretrained("facebook/detr-resnet-50", revision="no_timm")
            
        inputs = processor(images=image, return_tensors="pt")
        outputs = model(**inputs)

        target_sizes = torch.tensor([image.size[::-1]])
        results = processor.post_process_object_detection(outputs, target_sizes=target_sizes, threshold=0.8)[0]
        output = []

        for score, label, box in zip(results["scores"], results["labels"], results["boxes"]):
            box = [round(i, 2) for i in box.tolist()]
            output.append({"label": model.config.id2label[label.item()], "confidence": round(score.item(), 3)})

        return output

    def biometric_detect_all(self, pdf_path):
        # Clean up folders
        current_dir = os.path.dirname(os.path.abspath(__file__))

        if pdf_path.endswith('.pdf'):
            # extract_images_from_pdf(pdf_path)

            target_dir = path_finder('Detection_Engine/extracted_images/pdf_images')
            os.makedirs(target_dir, exist_ok=True)
            images = [os.path.join(target_dir, i) for i in os.listdir(target_dir) if i.endswith('.png') or i.endswith('.jpg')]

            output = []
            count = 0
            for image in images:
                count += 1
                output.append(self.biometric_detect_people(image))

            png_files = glob.glob(os.path.join(target_dir, '*.png'))
            for file in png_files:
                os.remove(file)

            return count

        elif pdf_path.endswith('.docx'):
            # extract_images_from_docx(pdf_path)

            target_dir = path_finder('Detection_Engine/extracted_images/docx_images')
            os.makedirs(target_dir, exist_ok=True)
            images = [os.path.join(target_dir, i) for i in os.listdir(target_dir) if i.endswith('.png') or i.endswith('.jpg')]

            output = []
            count = 0
            for image in images:
                count += 1
                output.append(self.biometric_detect_people(image))

            png_files = glob.glob(os.path.join(target_dir, '*.png'))
            for file in png_files:
                os.remove(file)

            return count

        elif pdf_path.endswith('.xlsx'):
            # extract_images_from_excel(pdf_path)

            target_dir = path_finder('Detection_Engine/extracted_images/xlsx_images')
            os.makedirs(target_dir, exist_ok=True)
            images = [os.path.join(target_dir, i) for i in os.listdir(target_dir) if i.endswith('.png') or i.endswith('.jpg')]

            output = []
            count = 0
            for image in images:
                count += 1
                output.append(self.biometric_detect_people(image))

            png_files = glob.glob(os.path.join(target_dir, '*.png'))
            for file in png_files:
                os.remove(file)

            return count


if __name__ == "__main__":
    # out = biometric_detect_people("../mockdata/p2.png")
    # print(out)

    # print(biometric_detect_eye("../mockdata/p2.png"))
    # save_model_local()

    # extract_images()
    print(biometric_detect_all("../mockdata/excelWimages.xlsx"))
    # extract_images_from_excel("../mockdata/excelWimages.xlsx")
