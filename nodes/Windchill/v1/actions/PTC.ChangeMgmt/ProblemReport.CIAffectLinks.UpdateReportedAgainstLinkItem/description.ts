import { INodeProperties } from "n8n-workflow";

export const ProblemReportCiAffectLinksUpdateReportedAgainstLinkItemDescription: INodeProperties[] = [
	{
		displayName: 'ProblemReportId',
		name: 'ProblemReportId-string(path)',
		description: 'Problem Report ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'ReportedAgainstLinkItemId',
		name: 'ReportedAgainstLinkItemId-string(path)',
		description: 'Reported Against Link Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'ApprovedQuantity',
				name: 'ApprovedQuantity',
				description: 'Approved Quantity - number',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Description',
				name: 'Description',
				description: 'Description - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"ApprovedQuantity": 0,\n\t"Description": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
