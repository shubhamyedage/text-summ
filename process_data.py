"""
This module runs script to decode or train data.
"""
import logging, os
from file_utils import FileUtils

class ProcessData:
    def process_data(self, data):
        logging.debug("In process_data()...")
        job_name = FileUtils().get_string()
        os.system("sudo sh ./run.sh {}".format(job_name))
        logging.debug("Done!")


if __name__ == "__main__":
    ProcessData().process_data("")