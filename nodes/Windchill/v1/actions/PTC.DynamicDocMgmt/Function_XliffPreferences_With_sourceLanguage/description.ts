import { INodeProperties } from "n8n-workflow";

export const FunctionXliffPreferencesWithSourceLanguageDescription: INodeProperties[] = [
	{
		displayName: 'oidForC3diDocument',
		name: 'oidForC3diDocument-string(path)',
		description: 'Oid For C3di Document - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /XliffPreferences(oidForC3diDocument='{oidForC3diDocument}',sourceLanguage='{sourceLanguage}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'sourceLanguage',
		name: 'sourceLanguage-string(path)',
		description: 'Source Language - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.DynamicDocMgmt',
				],
				operation: [
					"GET /XliffPreferences(oidForC3diDocument='{oidForC3diDocument}',sourceLanguage='{sourceLanguage}')",
				],
			},
		},
		required: true,
	},
];
