# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class PaginationDetails(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, results_per_page: int=None, page_number: int=None):  # noqa: E501
        """PaginationDetails - a model defined in Swagger

        :param results_per_page: The results_per_page of this PaginationDetails.  # noqa: E501
        :type results_per_page: int
        :param page_number: The page_number of this PaginationDetails.  # noqa: E501
        :type page_number: int
        """
        self.swagger_types = {
            'results_per_page': int,
            'page_number': int
        }

        self.attribute_map = {
            'results_per_page': 'resultsPerPage',
            'page_number': 'pageNumber'
        }
        self._results_per_page = results_per_page
        self._page_number = page_number

    @classmethod
    def from_dict(cls, dikt) -> 'PaginationDetails':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The PaginationDetails of this PaginationDetails.  # noqa: E501
        :rtype: PaginationDetails
        """
        return util.deserialize_model(dikt, cls)

    @property
    def results_per_page(self) -> int:
        """Gets the results_per_page of this PaginationDetails.


        :return: The results_per_page of this PaginationDetails.
        :rtype: int
        """
        return self._results_per_page

    @results_per_page.setter
    def results_per_page(self, results_per_page: int):
        """Sets the results_per_page of this PaginationDetails.


        :param results_per_page: The results_per_page of this PaginationDetails.
        :type results_per_page: int
        """

        self._results_per_page = results_per_page

    @property
    def page_number(self) -> int:
        """Gets the page_number of this PaginationDetails.


        :return: The page_number of this PaginationDetails.
        :rtype: int
        """
        return self._page_number

    @page_number.setter
    def page_number(self, page_number: int):
        """Sets the page_number of this PaginationDetails.


        :param page_number: The page_number of this PaginationDetails.
        :type page_number: int
        """

        self._page_number = page_number
